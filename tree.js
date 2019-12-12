function Tree() {
	this.root = null;
}

Tree.prototype.traverse = function() {
	this.root.visit();
}

Tree.prototype.addValue = function(val) {
	var n = new Node(val);
	if(this.root == null)
		this.root = n;
	else
		this.root.addNode(n);
}

Tree.prototype.search = function(val) {
	this.root.search(val);
}

Tree.prototype.getHeight = function() {
	return this.root.height();
}

Tree.prototype.visualize = function() {
	this.root.visualize(600/2, 15)
}