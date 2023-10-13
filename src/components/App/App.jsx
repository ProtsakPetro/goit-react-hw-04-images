import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import ImageGallery from '../ImageGallery/ImageGallery';
import Modal from '../Modal/Modal';
import Searchbar from '../SearchBar/SearchBar';
import { Container } from './App.styled';
import { getImages } from 'pixabay-api';
import { Oval } from 'react-loader-spinner';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const App = () => {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isShowModal, setIsShowModal] = useState(false);
  const [imageForModal, setImageForModal] = useState('');
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (searchQuery || page > 1) {
      getInputImages();
    }
  }, [searchQuery, page]);

  const getInputImages = async () => {
    try {
      setLoader(true);
      const { data } = await getImages(searchQuery, page);
      if (data.hits.length < 1) {
        Notify.info("Sorry, but we can't find any images for your request");
        return;
      }
      setImages((prevImages) => [...prevImages, ...data.hits]);
      setResult(page * 12);
      setTotalHits(data.totalHits);
    } catch (error) {
      setError(true);
    } finally {
      setLoader(false);
    }
  };

  const addInputData = (searchQuery) => {
    setSearchQuery(searchQuery);
    setImages([]);
    setPage(1);
  };

  const getModalPhoto = (image) => {
    setImageForModal(image);
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const getMorePhoto = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Container>
      <Searchbar onSubmit={addInputData} />
      {images && images.length > 0 && (
        <ImageGallery images={images} getModalPhoto={getModalPhoto} />
      )}
      {loader && (
        <Oval
          height={90}
          width={90}
          color="#696"
          wrapperStyle={{ margin: '200px auto' }}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="#696"
          strokeWidth={2}
          strokeWidthSecondary={2}
        />
      )}
      {error && <p>Sory! Something went wrong...</p>}
      {images && images.length > 0 && result < totalHits && (
        <Button getMorePhoto={getMorePhoto} />
      )}
      {isShowModal && (
        <Modal largeImageURL={imageForModal} closeModal={closeModal} />
      )}
    </Container>
  );
};

export default App;