var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var PhotoGallery = React.createClass({
  getInitialState: function() {
    return ({
      data: ["http://farm8.static.flickr.com/7674/17084785351_1787a70b32.jpg", "http://farm9.static.flickr.com/8801/17084776221_2667798b45.jpg"]
   });
  },
  render: function(){
    return(
     <div>
       <PhotoList data={this.state.data} />
      </div>
    );
  }
});

var PhotoList = React.createClass({
  render: function() {
    var content = this.props.data.map(function(element, i) {
      return (
         <SinglePhoto imageURL={element} />
      );
    });
    return (
      <div id="photosList">
        {content}
      </div>
     );
   }
});

var SinglePhoto = React.createClass({
  render: function() {
    return (
      <div className='photo'>
        <a href= {this.props.imageURL}>
        <img src={this.props.imageURL} className="image-title"/>
        </a>
      </div>
    );
  }
});





