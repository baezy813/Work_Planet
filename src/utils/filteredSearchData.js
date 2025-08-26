export function filterData(data = [], searchQuery = "", fields = []) {
    if (!searchQuery) return data;
  
    return data.filter((item) =>
      fields.some((field) =>
        item[field]?.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }
  