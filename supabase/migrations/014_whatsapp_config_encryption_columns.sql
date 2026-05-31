-- ============================================================
-- Migration 014: Add per-row encryption columns to whatsapp_config
--
-- The webhook route selects `is_legacy_encryption` and
-- `encryption_key` from whatsapp_config, but these columns were
-- never added to the schema, causing every inbound webhook to
-- fail with error 42703 (column does not exist).
--
-- is_legacy_encryption: boolean flag set to true when the row
--   was encrypted with the legacy AES-256-CBC scheme. Once the
--   token is re-saved (or upgraded by the GET handler), it
--   flips to false. Defaults to false for all new rows.
--
-- encryption_key: optional per-tenant override for the AES key.
--   NULL means "use the global ENCRYPTION_KEY env var", which is
--   the default for all existing and new rows.
-- ============================================================

ALTER TABLE whatsapp_config
  ADD COLUMN IF NOT EXISTS is_legacy_encryption BOOLEAN NOT NULL DEFAULT false,
  ADD COLUMN IF NOT EXISTS encryption_key        TEXT;
