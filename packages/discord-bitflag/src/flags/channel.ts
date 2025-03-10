import type { BitFlags } from "bitflag-js";

export const ChannelFlags: BitFlags = Object.freeze({
	Pinned: 1n << 1n,
	RequireTag: 1n << 4n,
	HideMediaDownloadOptions: 1n << 15n,
});
