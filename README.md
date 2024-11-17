# TrieSearch - Efficient String Search Using Trie

**TrieSearch** is a lightweight and high-performance JavaScript library that uses the Trie (prefix tree) data structure to efficiently search through arrays of strings or objects. It supports searching with blazing speed, capable of finding results in large datasets (e.g., 20,000 words) in under **1 millisecond**.

---

## 🚀 **Features**
- 🔍 **Fast Search:** Efficiently search through large datasets using Trie.  
- 📂 **Flexible Input:** Supports arrays of strings or arrays of objects (with a specified key).  
- 🛠 **Customizable:** Easily adapt to different use cases by providing the field to search for in object arrays.  
- ⚡ **Performance:** Handles thousands of entries in milliseconds.

---



## 📥 **Installation**
Install the package using npm:  
```bash
npm install search-optimized-filter
```



## 📘 **Usage**

### 1. Searching an Array of Strings
```bash
   import TrieSearch from "search-optimized-filter";
   const words = ["hello", "world", "hii", "trie", "search", "how are you"];
   const trie = new TrieSearch(words);
   // Search for words starting with "h"
   console.log(trie.suggest("h")); // Output: ["hii","hello","how are you"] 
```
### 2. Searching an Array of Objects If the input is an array of objects </br>
   specify the key to search for:
```bash
   import TrieSearch from "search-optimized-filter";
  
   const data = [
     { name: "john", age: 10 },
     { name: "jane", age: 20 },
     { name: "mark", age: 23 },
     { name: "bob", age: 25 },
     { name: "alliss", age: 5 },
     { name: "aston", age: 30 },
   ];
  
   const trie = new TrieSearch(data, "name");
  
   // Search for names starting with 'a'
   console.log(trie.suggest("a")); // Output: ["alliss", "aston"]

```



## ⚙️ **API Reference**

**Constructor**
```bash
new TrieSearch(array, [key])
```
- `array`: The dataset to be used. Can be an array of strings or an array of objects.
- `key`: _(Optional)_ The key in the object to search for (required if the input is an array of objects).  


**Methods**
1. `insert(word)`
Inserts a word into the Trie.(Internally used; rarely needed directly).
2. `suggest(prefix)`
Returns an array of words or object values that match the given prefix.
  - `prefix`: The prefix string to search for.



## 🏎️ **Performance**

**TrieSearch** is optimized for high performance, capable of searching 20,000 words in under 1 millisecond.  
Here\'s a performance screenshot:



## 🌟 **Why Use TrieSearch?**

- Perfect for autocomplete, predictive text, or any search functionality requiring lightning-fast results.
- Easy-to-use API with seamless integration into existing JavaScript or Node.js projects.
- Flexible handling of both arrays of strings and arrays of objects.



## 📄 **Example Code**

```bash
import TrieSearch from "search-optimized-filter";

// Example 1: Array of Strings
const words = ["apple", "banana", "grape", "orange", "mango"];
const trie1 = new TrieSearch(words);
console.log(trie1.suggest("gr")); // Output: ["grape"]

// Example 2: Array of Objects
const data = [
  { name: "alice", age: 30 },
  { name: "bob", age: 25 },
  { name: "charlie", age: 35 },
];
const trie2 = new TrieSearch(data, "name");
console.log(trie2.suggest("al")); // Output: ["alice"]

```



## 📦 **Package Details**
- Language: JavaScript (Node.js)
- Dependencies: None



## 🛠️ **Contributing**

Contributions, issues, and feature requests are welcome! Feel free to fork the repository and submit pull requests. 



## 📃 **License**

This project is licensed under the MIT License. 

**Start optimizing your search today with TrieSearch!** 🚀

