'use client';
import { addToCart } from '@/state/cartSlice';
import { AppDispatch, useAppSelector } from '@/state/store';
import React from 'react'
import { useDispatch } from 'react-redux';
import { MenuItem } from '../lib/items';

export const Button = ({ title, item }: { title: string, item: MenuItem }) => {
  const dispatch = useDispatch<AppDispatch>();
  const handleClick = () => {
    dispatch(addToCart(item))
  }

  return (
    <button onClick={handleClick}>{title}</button>
  )
}
