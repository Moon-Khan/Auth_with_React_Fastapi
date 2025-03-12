# from fastapi import Request, HTTPException, Security
# from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
# from auth import decode_token

# security = HTTPBearer()

# async def get_current_user(credentials: HTTPAuthorizationCredentials = Security(security)):
#     token = credentials.credentials
#     payload = decode_token(token)
#     if payload is None:
#         raise HTTPException(status_code=401, detail="Invalid token")
#     return payload
            