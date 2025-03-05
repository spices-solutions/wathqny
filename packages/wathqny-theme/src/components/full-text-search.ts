type DataItem = {
  title: string; // Adjust keys as per your actual data structure
  [key: string]: string | number | boolean;
};

class FullTextSearch {
  private data: DataItem[];
  private keys: string[];
  private index: Map<string, DataItem[]>;

  constructor(data: DataItem[], keys: string[]) {
    this.data = data;
    this.keys = keys;
    this.index = this.buildIndex();
  }

  private buildIndex(): Map<string, DataItem[]> {
    const index = new Map<string, DataItem[]>();

    // biome-ignore lint/complexity/noForEach: <explanation>
    this.data.forEach(item => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      this.keys.forEach(key => {
        const words = item[key]?.toString().toLowerCase().split(/\s+/).filter(Boolean) || [];
        // biome-ignore lint/complexity/noForEach: <explanation>
        words.forEach(word => {
          if (!index.has(word)) {
            index.set(word, []);
          }
          index.get(word)?.push(item);
        });
      });
    });

    return index;
  }

  public search(query: string): DataItem[] {
    const normalizedQuery = query.toLowerCase().trim();
    const queryWords = normalizedQuery.split(/\s+/).filter(Boolean);
  
    // Collect results for each query word
    let results: DataItem[] = [];
    queryWords.forEach(word => {
      // Search for items that include the query word partially
      for (const [indexWord, indexItems] of this.index.entries()) {
        if (indexWord.includes(word)) {
          results.push(...indexItems);
        }
      }
    });
  
    // Deduplicate results
    results = Array.from(new Set(results));
  
    // Filter results by full text match within keys
    results = results.filter(item =>
      this.keys.some(key =>
        item[key]?.toString().toLowerCase().includes(normalizedQuery)
      )
    );
  
    return results;
  }
  
}

export default FullTextSearch;
