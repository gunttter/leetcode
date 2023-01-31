import { invertTree } from "./main";
import { TreeNode } from "./main";

test("Basic input example", () => {
  let tree = new TreeNode(1);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(3);
  tree.left.left = new TreeNode(4);
  tree.left.right = new TreeNode(5);
  tree.right.left = new TreeNode(6);
  tree.right.right = new TreeNode(7);

  let invertedTree = new TreeNode(1);
  invertedTree.left = new TreeNode(3);
  invertedTree.right = new TreeNode(2);
  invertedTree.left.left = new TreeNode(7);
  invertedTree.left.right = new TreeNode(6);
  invertedTree.right.left = new TreeNode(5);
  invertedTree.right.right = new TreeNode(4);

  expect(invertTree(tree)).toStrictEqual(invertedTree);
});
test("Empty binary tree", () => {
  let tree = new TreeNode();
  let invertedTree = new TreeNode();
  expect(invertTree(tree)).toStrictEqual(invertedTree);
});
