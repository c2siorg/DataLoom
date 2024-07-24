from pydantic import BaseModel

class FilterParameters(BaseModel):
    filter_condition: str

class TransformationInput(BaseModel):
    operation_type: str
    parameters: FilterParameters

class DatasetResponse(BaseModel):
    filename: str
    file_path: str
    dataset_id: int
    columns: list[str]
    row_count: int
    rows: list[list]