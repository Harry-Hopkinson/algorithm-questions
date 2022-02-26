function Node(val, left, right) {
	this.val = val === undefined ? 0 : val;
	this.left = left === undefined ? null : left;
	this.right = right === undefined ? null : right;
}

const invertTree = function (root) {
	if (!root || (!root.left && !root.right)) {
		return root;
	}

	const oldLeft = root.left;
	root.left = root.right;
	root.right = oldLeft;
	invertTree(root.left);
	invertTree(root.right);
	return root;
};

const tree = new Node(
	4,
	new Node(2, new Node(1), new Node(3)),
	new Node(7, new Node(6), new Node(9))
);
console.log(invertTree(tree));
