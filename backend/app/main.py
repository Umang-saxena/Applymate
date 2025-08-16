# from typing import Union

# from fastapi import FastAPI

# app = FastAPI()


# @app.get("/")
# def read_root():
#     return {"Hello": "World"}


# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

# @app.post("/items/")
# def create_item(item: dict):
#     return {"item": item}

from fastapi import FastAPI
from .routes import test

app = FastAPI()

app.include_router(test.router)
