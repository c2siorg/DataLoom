from sqlalchemy import create_engine, Column, Integer, String, DateTime, ForeignKey, Text, Enum, JSON, Boolean, func
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
    logs = relationship("DatasetChangeLog", back_populates="dataset")
    checkpoints = relationship("Checkpoint", back_populates="dataset") 


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

class DatasetChangeLog(Base):
    __tablename__ = 'user_logs'
    change_log_id = Column(Integer, primary_key=True, autoincrement=True)
    # user_id add later
    dataset_id = Column(Integer, ForeignKey('datasets.dataset_id'), nullable=False)
    # change_details = Column(JSON, nullable=False)
    # applied = Column(Boolean, nullable=False)
    # reverted = Column(Boolean, nullable=False)
    # created_at = Column(DateTime, nullable=False)
    # applied_at = Column(DateTime, nullable=True)
    # reverted_at = Column(DateTime, nullable=True)
    action_type = Column(String(50), nullable=False)
    action_details = Column(JSON, nullable=False)
    timestamp = Column(DateTime, server_default=func.now(), nullable=False)
    checkpoint_id = Column(Integer, nullable=True)
    applied = Column(Boolean, server_default="false", nullable=False)

    # user = relationship("User", back_populates="logs")
    dataset = relationship("Dataset", back_populates="logs")

# Add this to your models.py file

class Checkpoint(Base):
    __tablename__ = 'checkpoints'

    id = Column(Integer, primary_key=True, index=True)
    dataset_id = Column(Integer, ForeignKey('datasets.dataset_id'), nullable=False)
    message = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

    dataset = relationship("Dataset", back_populates="checkpoints")

# Create engine and session
engine = create_engine('DATABASE_URL')
Base.metadata.create_all(engine)
Session = sessionmaker(bind=engine)
session = Session()
