#!/usr/bin/env python3
"""
12. Log Stats
"""

from pymongo import MongoClient


if __name__ == "__main__":
    # Connect to MongoDB
    client = MongoClient('mongodb://localhost:27017/')
    db = client.logs
    collection = db.nginx
    
    # Count total number of documents
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")
    
    # Print methods count
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    
    for method in methods:
        method_count = collection.count_documents({"method": method})
        print(f"    method {method}: {method_count}")
    
    # Count GET requests to /status
    status_check = collection.count_documents({"method": "GET", "path": "/status"})
    print(f"{status_check} status check")
