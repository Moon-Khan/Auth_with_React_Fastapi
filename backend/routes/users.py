from fastapi import APIRouter, HTTPException
from auth import verify_pswrd, hash_pswrd, create_acess_token
from models import users
from datetime import timedelta
from schemas import User, Token

router = APIRouter()

@router.post("/login", response_model=Token)
async def login(user: User):
    
    db_user = await users.find_one({"username": user.username})
    if not db_user or not verify_pswrd(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    access_token = create_acess_token({"sub": user.username}, expires_delta=timedelta(minutes=30))
    return {"access_token": access_token, "token_type": "bearer"}


@router.post("/register", response_model = dict)
async def register(user: User):

    print("Received:", user.model_dump()) 

    if  await users.find_one({"username": user.username}):
        print("data found", user.username)

        raise HTTPException(status_code=409, detail="User already exists")

    hashed_password = hash_pswrd(user.password)
    await users.insert_one({"username": user.username, "password": hashed_password})
    return {"message": "User registered successfully"}

