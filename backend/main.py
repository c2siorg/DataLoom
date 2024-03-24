from typing import Union
from uvicorn import run
from fastapi import FastAPI

description = """
## DataLoom Data Wrangling Application's API
- A scalable and secure backend architecture to handle requests and perform 
data transformations.
"""

app = FastAPI(
    title="DataLoom API",
    description=description
)


@app.get("/", description="Root end-point")
def read_root():
    return {"response": "Hello World"}


if __name__ == '__main__':
    run("main:app", host="localhost", port=8000, reload=True)