export const apiURL =
  process.env.NODE_ENV !== "production" ? "http://localhost:3001/api/v1" : "";

export const LOCAL_STORAGE_TOKEN_NAME = "fsb-localStorage";