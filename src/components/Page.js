import React, { PropTypes, Component } from 'react'

export default class Page extends Component {

  render() {
    const { year, photos } = this.props.data;
    const getPhotos = this.props.actions.getPhotos;
    const error = this.props.data.error;
    const loading = this.props.data.loadind;

    let errorBlock = "";
    if (error){
      errorBlock = <p>
        {error}
      </p>
    }

    let imagesBlock;
    if (photos.length > 0) {
    imagesBlock = photos.map((elem, index)=>{
      return <p id={index}><img src={elem}></img></p>
    });
    }
    else {
      imagesBlock = ''
    }




    let loadingBlock = "";
    if (loading) {
      loadingBlock = <p>
        Загружаем...
      </p>
    }

    let photoCountBlock = "";
    if (!loading && !error) {
      photoCountBlock = <p>У тебя {photos.length} фото.</p>
    }

    return <div>
      <p>
        <button disabled={loading} onClick={getPhotos.bind(this, 2014)}>2014</button>
        <button disabled={loading} onClick={getPhotos.bind(this, 2015)}>2015</button>
        <button disabled={loading} onClick={getPhotos.bind(this, 2016)}>2016</button>
      </p>
      {errorBlock}
      {loadingBlock}
      {imagesBlock}
      <h3>{year} год</h3>
      {photoCountBlock}
    </div>
  }
}

Page.propTypes = {
  //year: PropTypes.number.isRequired,
  //photos: PropTypes.array.isRequired,
  //setYear: PropTypes.func.isRequired
}