-- Up
CREATE INDEX IF NOT EXISTS idx_createdAt on Blog (createdAt desc);

-- Down

DROP INDEX IF EXISTS idx_createdAt;