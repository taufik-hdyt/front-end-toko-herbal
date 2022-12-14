import { Box, Grid, GridItem, Image, Spacer, Text } from "@chakra-ui/react";
import React, { memo, useEffect, useState } from "react";
import { useProductAction } from "./Product.action";
import ModalAddItem from "../../components/Modals/ModalAddItem";
import { addTocard } from "../../redux/slices/cart.slices";
import { useAppDispatch } from "../../hooks/hooks";
import Pagination from "../../components/Pagination";
import { useRouter } from "next/router";

interface IProps {
  token: string;
  isOpenModal: boolean;
}

const Products: React.FC<IProps> = ({ token, isOpenModal }): JSX.Element => {
  const router = useRouter();
  const {
    addProduct,
    products,
    getListProduct,
    onToggle,
    onClose,
    isOpen,
    meta,
  } = useProductAction(token);
  console.log(meta);

  const dispatch = useAppDispatch();
  const handlePageClick = (p: number) => {
    getListProduct(p);
  };

  //=============== memanggil dari Product.action.tsx ==================
  useEffect(() => {
    getListProduct();
  }, []);

  //=================== memanngil untuk membuka open modal ==================
  useEffect(() => {
    if (isOpenModal) {
      onToggle();
    }
  }, [isOpenModal]);
  return (
    <Box>
      <Grid templateColumns="1fr 1fr 1fr 1fr" gap="8">
        {products?.map((product: any, index: number) => {
          return (
            <GridItem key={`produk-item-${index}`}>
              <Box
                h="full"
                w="full"
                bg="white"
                shadow="md"
                rounded="md"
                onClick={() => dispatch(addTocard(product))}
                cursor="pointer"
              >
                <Image w="full" src="/images/bear.png" alt={product.name} />
                <Box p="2">
                  <Text textAlign="center" fontSize="25px">
                    {product.name}
                  </Text>
                  <Text textAlign="center" fontWeight="bold" fontSize="25px">
                    Rp.{product.price}
                  </Text>
                  <Text>{product.stock}</Text>
                </Box>
              </Box>
            </GridItem>
          );
        })}
      </Grid>

      <ModalAddItem addProduct={addProduct} isOpen={isOpen} onClose={onClose} />

      <Pagination
        onChange={handlePageClick}
        pageSize={meta?.limit ?? 0}
        current={meta?.page ?? 0}
        total={meta?.totalData ?? 0}
      />
    </Box>
  );
};

export default memo(Products);
