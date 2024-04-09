import { Tag } from "./tag";

interface HslColor {
    h: string,
    s: string,
    l: string
};

export let TagToColor: Map<Tag, HslColor> = new Map<Tag, HslColor>([
    [Tag.Tutorial, {h: "235", s: "98.5%", l: "25.5%"}],
    [Tag.Activity, {h: "310", s: "98.5%", l: "25.5%"}],
    [Tag.Tool, {h: "110", s: "98.5%", l: "25.5%"}],
    [Tag.Game, {h: "50", s: "98.5%", l: "25.5%"}],
    [Tag.Cover, {h: "200", s: "98.5%", l: "25.5%"}],
    [Tag.FanArt, {h: "0", s: "98.5%", l: "25.5%"}],
])