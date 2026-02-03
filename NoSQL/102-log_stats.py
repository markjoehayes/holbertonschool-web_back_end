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
    # Get all students
    students = list(mongo_collection.find())
    
    # Calculate average score for each student and add it to the document
    for student in students:
        scores = [topic['score'] for topic in student['topics']]
        average_score = sum(scores) / len(scores) if scores else 0
        student['averageScore'] = average_score
    
    # Sort students by averageScore in descending order
    sorted_students = sorted(students, key=lambda x: x['averageScore'], reverse=True)
    
    return sorted_students
