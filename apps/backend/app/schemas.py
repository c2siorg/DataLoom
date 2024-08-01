from pydantic import BaseModel
from typing import Optional

class FilterParameters(BaseModel):
    column: str
    condition: str
    value: str

class SortParameters(BaseModel):
    column: str
    ascending: bool

class Add_or_Del_Row(BaseModel):
    index: int

class Add_or_Del_Column(BaseModel):
    index: int
    name: str
 
class TransformationInput(BaseModel):
    operation_type: str
    parameters: Optional[FilterParameters] = None
    sort_params:Optional[SortParameters] = None
    row_params: Optional[Add_or_Del_Row] = None
    col_params: Optional[Add_or_Del_Column] = None
 
class BasicQueryResponse(BaseModel):
    dataset_id: int
    operation_type: str
    row_count: int
    # result: List[Dict[str, Any]]
    columns: list[str]
    rows: list[list]  # Convert dataframe rows to list of lists

class DatasetResponse(BaseModel):
    filename: str
    file_path: str
    dataset_id: int
    columns: list[str]
    row_count: int
    rows: list[list]