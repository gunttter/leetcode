import { lowestCommonAncestor } from "./main";
import { TreeNode } from "./main";

test("Basic input example", () => {
  let tree = new TreeNode(6);
  tree.left = new TreeNode(2);
  tree.right = new TreeNode(8);
  tree.left.left = new TreeNode(0);
  tree.left.right = new TreeNode(4);
  tree.right.left = new TreeNode(7);
  tree.right.right = new TreeNode(9);
  tree.left.right.left = new TreeNode(3);
  tree.left.right.right = new TreeNode(5);

  let solution = new TreeNode(6);
  solution.left = new TreeNode(2);
  solution.right = new TreeNode(8);
  solution.left.left = new TreeNode(0);
  solution.left.right = new TreeNode(4);
  solution.right.left = new TreeNode(7);
  solution.right.right = new TreeNode(9);
  solution.left.right.left = new TreeNode(3);
  solution.left.right.right = new TreeNode(5);

  expect(lowestCommonAncestor(tree, 2, 8)).toStrictEqual(solution);
});
test("Example with empty", () => {
  let tree = new TreeNode();
  let solution = new TreeNode();
  expect(lowestCommonAncestor(tree, 0, 0)).toStrictEqual(solution);
});
