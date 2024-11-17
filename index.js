class _TrieNode {
  constructor() {
    this.children = {};
    this.isWord = false;
  }
}

class TrieSearch {
  #root;

  constructor(words, key) {
    this.#root = new _TrieNode();
    if (Array.isArray(words)) {
      if (typeof words[0] === "string") {
        // Case 1: Array of strings
        words.forEach((word) => {
          return this.insert(word);
        });
      } else if (typeof words[0] === "object" && key) {
        // Case 2: Array of objects and a key
        const arrayOfStrings = words.map((obj) => obj[key] || "");
        arrayOfStrings.forEach((word) => {
          if (typeof word === "string" && word !== "") return this.insert(word);
        });
      } else {
        throw new Error(
          "Invalid input format. Must be an array of strings or an array of objects with a key."
        );
      }
    } else {
      throw new Error("Input must be an array.");
    }
  }

  insert(word) {
    let node = this.#root;
    for (let i = 0; i < word.length; i++) {
      if (!node.children[word[i]]) {
        node.children[word[i]] = new _TrieNode();
        this.nodeCount += 1;
      }
      node = node.children[word[i]];
    }
    node.isWord = true;
  }

  #suggestHelper(root, list, curr) {
    if (root.isWord) {
      list.push(curr);
    }
    if (!Object.keys(root.children).length) {
      return;
    }
    for (let child in root.children) {
      this.#suggestHelper(root.children[child], list, curr + child);
    }
  }

  suggest(prefix) {
    let _node = this.#root;
    let _curr = "";
    for (let i = 0; i < prefix.length; i++) {
      if (!_node.children[prefix[i]]) {
        return [];
      }
      _node = _node.children[prefix[i]];
      _curr += prefix[i];
    }
    let list = [];
    this.#suggestHelper(_node, list, _curr);
    return list;
  }
}

module.exports = TrieSearch;
