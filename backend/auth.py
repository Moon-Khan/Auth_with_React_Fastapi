from jose import JWTError, jwt
from datetime import datetime, timedelta
from typing import Optional
from passlib.context import CryptContext

SECRET_KEY = "SHIS2OIPSAIJ230AALASUJHC912031FFCAV34591RNASDJCZW340"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINS = 30

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def create_acess_token(data: dict, expires_delta: Optional[timedelta] = None):
    to_encode = data.copy()
    to_expire = datetime.utcnow() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINS))
    to_encode.update({"exp": to_expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

def decode_token(token: str):
    try:
        return jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
    except JWTError:
        return None
    
def hash_pswrd(pswrd: str):
    return pwd_context.hash(pswrd)

def verify_pswrd(pswrd:str, hash_pswrd: str):
    return pwd_context.verify(pswrd, hash_pswrd)