-- ============================================================
-- Migration 015: Atomic JSONB append for automation log steps
--
-- appendResults() in the engine previously used a read-modify-write
-- cycle to merge new step results into automation_logs.steps_executed.
-- When two branches of a Condition step executed concurrently, both
-- would read the same snapshot and one branch's results were silently
-- lost on write-back.
--
-- This function appends new step results atomically using Postgres
-- jsonb concatenation (||), eliminating the race entirely.
-- ============================================================

CREATE OR REPLACE FUNCTION append_automation_log_steps(
  p_log_id   UUID,
  p_new_steps JSONB
)
RETURNS VOID
LANGUAGE SQL
SECURITY DEFINER
AS $$
  UPDATE automation_logs
  SET steps_executed = steps_executed || p_new_steps
  WHERE id = p_log_id;
$$;
