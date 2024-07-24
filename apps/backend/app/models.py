from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Text, Enum, JSON, Boolean
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship, sessionmaker
from enum import Enum as PyEnum
import datetime
Base = declarative_base()

class OperationType(PyEnum):
    CLEAN = 'clean'
    AGGREGATE = 'aggregate'
    FILTER = 'filter'
    MERGE = 'merge'
    PIVOT = 'pivot'

operation_enum = Enum(OperationType, name='operation_enum')


# class User(Base):
#     __tablename__ = 'users'
#     user_id = Column(Integer, primary_key=True,nullable=True,  autoincrement=True)
#     username = Column(String, unique=True, nullable=False)
#     email = Column(String, unique=True, nullable=False)
#     hashed_password = Column(String, nullable=False)
#     created_at = Column(DateTime, nullable=False)
#     last_login = Column(DateTime, nullable=True)

    # datasets = relationship("Dataset", back_populates="user")


class Dataset(Base): 
    __tablename__ = "datasets"

    dataset_id = Column(Integer, primary_key=True, index=True)
    # user_id = Column(Integer, ForeignKey("users.user_id"), nullable=True)  # Make it nullable temporarily
    name = Column(String, index=True)
    description = Column(String, nullable=True)
    upload_date = Column(DateTime, default=datetime.datetime.now)
    last_modified = Column(DateTime, default=datetime.datetime.now, onupdate=datetime.datetime.now)
    file_path = Column(String)

    # user = relationship("User", back_populates="datasets")


# class Task(Base):
#     __tablename__ = 'tasks'
#     task_id = Column(Integer, primary_key=True, autoincrement=True)
#     dataset_id = Column(Integer, ForeignKey('datasets.dataset_id'), nullable=False)
#     operation_type = Column(operation_enum, nullable=False)
#     parameters = Column(JSON, nullable=False)
#     status = Column(String, nullable=False)
#     result_path = Column(String, nullable=True)
#     created_at = Column(DateTime, nullable=False)
#     updated_at = Column(DateTime, nullable=False)
#     dataset = relationship("Dataset", back_populates="tasks")

# class DatasetChangeLog(Base):
#     __tablename__ = 'dataset_change_log'
#     change_log_id = Column(Integer, primary_key=True, autoincrement=True)
#     dataset_id = Column(Integer, ForeignKey('datasets.dataset_id'), nullable=False)
#     change_details = Column(JSON, nullable=False)
#     applied = Column(Boolean, nullable=False)
#     reverted = Column(Boolean, nullable=False)
#     created_at = Column(DateTime, nullable=False)
#     applied_at = Column(DateTime, nullable=True)
#     reverted_at = Column(DateTime, nullable=True)
#     dataset = relationship("Dataset", back_populates="change_logs")

# Establish relationships
# User.datasets = relationship("Dataset", order_by=Dataset.dataset_id, back_populates="user")
# Dataset.tasks = relationship("Task", order_by=Task.task_id, back_populates="dataset")
# Dataset.change_logs = relationship("DatasetChangeLog", order_by=DatasetChangeLog.change_log_id, back_populates="dataset")

# Create engine and session
engine = create_engine('postgresql://neondb_owner:gV5apEkmF6ry@ep-polished-rain-a101l3cb.ap-southeast-1.aws.neon.tech/neondb?sslmode=require')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
