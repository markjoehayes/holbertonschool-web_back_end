#!/usr/bin/env python3
"""
101-students.py
Function to return all students sorted by average score
"""


def top_students(mongo_collection):
    """
    Returns all students sorted by average score
    
    Args:
        mongo_collection: pymongo collection object
        
    Returns:
        List of students with averageScore field, sorted by averageScore in descending order
    """
    # Using MongoDB aggregation pipeline
    pipeline = [
        {
            "$project": {
                "name": 1,
                "topics": 1,
                # Calculate average score for each student
                "averageScore": {"$avg": "$topics.score"}
            }
        },
        {
            "$sort": {"averageScore": -1}  # Sort in descending order
        }
    ]
    
    # Execute aggregation pipeline
    results = list(mongo_collection.aggregate(pipeline))
    
    return results
