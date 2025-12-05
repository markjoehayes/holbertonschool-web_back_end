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
    def index_range(page: int, page_size: int) -> tuple[int, int]:
        """Calculate the start and end index for pagnination and return a tuple"""

        # calculate the start index
        start_index = (page - 1) * page_size
        # calculate the end index
        end_index = page * page_size
        return (start_index, end_index)

    def get_page(slf, page: int = 1, page_size: int = 10) -> List[list]:
        """Get corrosponding page"""
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        self.dataset()
        correct_index = index_range(page, page_size)
        if correct_index[0] > len(self.__dataset):
            return []
        return self.__dataset[correct_index[0]:correct_index[1]]

