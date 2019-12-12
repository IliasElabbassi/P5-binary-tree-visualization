function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

Node.prototype.addNode = function(n) {

	if(n.value > this.value)
		if(this.right == null)
			this.right = n;
		else
			this.right.addNode(n);
	else if (n.value <= this.value)
		if(this.left == null)
			this.left = n;
		else
			this.left.addNode(n);
}

Node.prototype.visit = function() {
	if (this.left != null)
		this.left.visit();

	console.log(this.value);

	if (this.right != null)
		this.right.visit();
}

Node.prototype.search = function(val) {
	if(this.value == val) {
		console.log(val + " found !");
	}else if(val < this.value && this.left != null) {
		this.left.search(val);
	}else if(val > this.value && this.right != null){
		this.right.search(val);
	}
}

Node.prototype.height = function() {
	if (this.left == null && this.right != null) {
		return 1 + this.right.height();
	}else if (this.right == null && this.left != null) {	
		return 1 + this.left.height();
	}
	else if (this.right != null && this.left != null)
		return (1 + max(this.left.height(),this.right.height()));
	else if (this.right == null && this.left == null)
		return 0;

}

Node.prototype.visualize = function(x,y) {
	fill(255)
	ellipse(x,y, 25,25);
	fill(255,0,0);
	textSize();
	text(this.value, x-5,y+5);

	if (this.left != null)
		this.left.visualize(x+-40,y+40);

	//console.log(this.value);

	if (this.right != null)
		this.right.visualize(x+40,y+40);
}