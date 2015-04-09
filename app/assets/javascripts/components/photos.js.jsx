var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;

var PhotoGallery = React.createClass({
  getInitialState: function() {
    return ({
      data: this.props.flickrPhotos
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
    var image = this.props.data.map(function(element, i) {
      return (
         <SinglePhoto imageURL={element} />
      );
    });
    return (
      <div id="photosList">
        {image}
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





