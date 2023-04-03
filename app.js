// let heading = React.createElement("h1",{"id":"root"},"[ello ! React JS");
let child = ReactDOM.createRoot(document.getElementById('test'));



// let parent = React.createElement('div',{"id":"parent"},[React.createElement('div',{'id':"child"},
// [React.createElement('h1',{"id":"heading1"},'I am an h1 tag'),
// React.createElement('h2',{"id":"heading2"},'I am an h2 tag')]),React.createElement('div',{'id':"child2"},
// [React.createElement('h1',{"id":"heading1"},'I am an h1 tag'),
// React.createElement('h2',{"id":"heading2"},'I am an h2 tag')])]);



let parent = React.createElement('div',{"id":"parent"},[React.createElement('div',{'id':'child1'},
[React.createElement('h1',{},"I am an h1 tag"),React.createElement('ol',{},[React.createElement('li',{},'Sonam'),React.createElement('li',{},'Sachin')])])]);

 child.render(parent);