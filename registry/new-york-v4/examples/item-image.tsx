import Image from "next/image"

import {
  Item,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemMedia,
  ItemTitle,
} from "@/registry/new-york-v4/ui/item"

const music = [
  {
    title: "ミッドナイトシティライツ",
    artist: "ネオンドリームス",
    album: "エレクトリックナイツ",
    duration: "3:45",
  },
  {
    title: "コーヒーショップの会話",
    artist: "モーニングブリュー",
    album: "都市の物語",
    duration: "4:05",
  },
  {
    title: "デジタルレイン",
    artist: "サイバーシンフォニー",
    album: "バイナリービーツ",
    duration: "3:30",
  },
]

export default function ItemImage() {
  return (
    <div className="flex w-full max-w-md flex-col gap-6">
      <ItemGroup className="gap-4">
        {music.map((song) => (
          <Item key={song.title} variant="outline" asChild role="listitem">
            <a href="#">
              <ItemMedia variant="image">
                <Image
                  src={`https://avatar.vercel.sh/${song.title}`}
                  alt={song.title}
                  width={32}
                  height={32}
                  className="object-cover grayscale"
                />
              </ItemMedia>
              <ItemContent>
                <ItemTitle className="line-clamp-1">
                  {song.title} -{" "}
                  <span className="text-muted-foreground">{song.album}</span>
                </ItemTitle>
                <ItemDescription>{song.artist}</ItemDescription>
              </ItemContent>
              <ItemContent className="flex-none text-center">
                <ItemDescription>{song.duration}</ItemDescription>
              </ItemContent>
            </a>
          </Item>
        ))}
      </ItemGroup>
    </div>
  )
}
