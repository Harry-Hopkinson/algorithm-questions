class TreeNode {
	val: number;
	left: TreeNode | null;
	right: TreeNode | null;
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = val === undefined ? 0 : val;
		this.left = left === undefined ? null : left;
		this.right = right === undefined ? null : right;
	}
}

function invertTreeTypescript(root: TreeNode | null): TreeNode | null {
	if (isTreeNode(root)) {
		const left = invertTreeTypescript(root.left);
		root.left = invertTreeTypescript(root.right);
		root.right = left;
	}
	return root;
}

function isTreeNode(root: any): root is TreeNode {
	return (
		root !== null &&
		typeof root === "object" &&
		typeof root.val === "number" &&
		typeof root.left === "object" &&
		typeof root.right === "object"
	);
}

function createTreeNode(
	val: number,
	left: TreeNode | null,
	right: TreeNode | null
): TreeNode {
	return new TreeNode(val, left, right);
}

invertTreeTypescript(
	createTreeNode(
		4,
		createTreeNode(
			2,
			createTreeNode(1, null, null),
			createTreeNode(3, null, null)
		),
		createTreeNode(
			7,
			createTreeNode(6, null, null),
			createTreeNode(9, null, null)
		)
	)
);
