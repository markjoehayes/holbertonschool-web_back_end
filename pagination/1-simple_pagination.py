#!/usr/bin/env python3
import csv
import math
from typing import Tuple, List


class Server:
    """Server class to paginate a database of popular baby names."""
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[list]:
        """Cached dataset"""
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset


    @staticmethod
    def index_range(page: int, page_size: int) -> Tuple[int, int]:
        """Calculate the start and end index for pagination and return a tuple"""
        # calculate the start index
        start_index = (page - 1) * page_size
        # calculate the end index
        end_index = page * page_size
        return (start_index, end_index)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[list]:
        """Get corresponding page"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        # Get the dataset
        dataset = self.dataset()
        
        # Get the start and end indices
        start_index, end_index = self.index_range(page, page_size)
        
        # Check if start_index is beyond dataset length
        if start_index >= len(dataset):
            return []
        
        # Return the page slice
        return dataset[start_index:end_index]
