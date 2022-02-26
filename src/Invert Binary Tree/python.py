### invert binary tree

class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None

def invertTree(root):
    if root == None:
        return None
    root.left, root.right = root.right, root.left
    invertTree(root.left)
    invertTree(root.right)
    return root

root = TreeNode(4)
root.left = TreeNode(2)
root.right = TreeNode(7)
root.left.left = TreeNode(1)
root.left.right = TreeNode(3)
invertTree(root)