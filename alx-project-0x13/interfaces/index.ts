import { ReactNode } from "react";

export interface ReactComponentProps {
  children: ReactNode
}


export interface GeneratedImageProps {
  imageUrl: string
  prompt: string
  width?: string
  height?: string
  action: (imagePath: string) => void
}

export type RequestProps = {
  prompt: string;
}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">
