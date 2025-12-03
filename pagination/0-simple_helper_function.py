#!/usr/bin/python3
"""Helper function to return start and end indixes of pagination"""

def index_range(page: int, page_size: int) -> tuple:
    """Calculate the start and end index for pagnination and return a tuple"""
    #calculate the start index
    start_index = (page - 1) * page_size
    # calculate the end index
    end_index = page * page_size
    
    return (start_index, end_index)
