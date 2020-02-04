-- Up
CREATE TABLE Blog (
    -- primary key 필드
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    -- title 저장 필드
    title TEXT,
    -- content 저장 필드
    content TEXT,
    -- 생성일 저장 필드
    createdAt TEXT
);

-- Down
