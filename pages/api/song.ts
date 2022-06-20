// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export type Song = {
  id: string;
  name: string;
  description: string;
  // title: string;
  artist: string;
  coverImageSrc: string;
  comments: string[];
  sharedBy?: string;
};

const dummySong: Song = {
  id: "123",
  name: "Lost in Tokyo",
  description:
    "Cras mattis consectetur purus sit amet fermentum. Maecenas sed diam eget risus varius blandit sit amet non magna.",
  artist: "Jonathan Vik",
  coverImageSrc: "/tokyo.jpg",
  comments: ["commment 1", "comment 2"],
  sharedBy: "Saagar",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Song>
) {
  res.status(200).json(dummySong);
}
