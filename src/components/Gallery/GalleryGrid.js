// @flow

import React, { useState } from 'react'
import Img from 'gatsby-image'
import { chunk, sum } from 'lodash'
import { Box, Link, Heading } from 'rebass'
import Carousel, { Modal, ModalGateway } from 'react-images'

type Props = {
  images: {
    id: string,
    aspectRatio: number,
    src: string,
    srcSet: string,
    fluid: string,
    originalImg: string,
    title: string,
  }[],
  itemsPerRow?: number[],
  title: string,
  slug: string,
}

const Gallery = ({
  title,
  slug,
  images,
  itemsPerRow: itemsPerRowByBreakpoints = [1, 2, 3, 4],
}: Props) => {
  const aspectRatios = images.map(image => image.aspectRatio)
  const rowAspectRatioSumsByBreakpoints = itemsPerRowByBreakpoints.map(
    itemsPerRow =>
      chunk(aspectRatios, itemsPerRow).map(rowAspectRatios =>
        sum(rowAspectRatios)
      )
  )

  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [modalCurrentIndex, setModalCurrentIndex] = useState(0)

  const closeModal = () => setModalIsOpen(false)
  const openModal = (imageIndex: number) => {
    setModalCurrentIndex(imageIndex)
    setModalIsOpen(true)
  }

  return (
    <Box p={[4, 5]}>
      <Heading key={title}>{title}</Heading>
      {images.map((image, i) => (
        <Link key={image.id} onClick={() => openModal(i)}>
          <Box
            as={Img}
            key={image.id}
            fluid={image.fluid}
            title={image.title}
            width={rowAspectRatioSumsByBreakpoints.map(
              (rowAspectRatioSums, j) => {
                const rowIndex = Math.floor(i / itemsPerRowByBreakpoints[j])
                const rowAspectRatioSum = rowAspectRatioSums[rowIndex]

                return `${(image.aspectRatio / rowAspectRatioSum) * 100}%`
              }
            )}
            css={`
            display: inline-block;
            vertical-align: middle;
            objectFit: 'cover !important',
            height: '100%',
          `}
          />
        </Link>
      ))}
      {ModalGateway && (
        <ModalGateway>
          {modalIsOpen && (
            <Modal onClose={closeModal}>
              <Carousel
                views={images.map(({ originalImg }) => ({
                  source: originalImg,
                }))}
                currentIndex={modalCurrentIndex}
              />
            </Modal>
          )}
        </ModalGateway>
      )}
    </Box>
  )
}
export default Gallery
