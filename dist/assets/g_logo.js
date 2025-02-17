const link_logo = new Proxy({"src":"/assets/g_logo.jpeg","width":886,"height":886,"format":"jpg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/phist/Library/Mobile Documents/com~apple~CloudDocs/FREQ FACT/MISC/freqfact.github.io/src/assets/g_logo.jpeg";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/phist/Library/Mobile Documents/com~apple~CloudDocs/FREQ FACT/MISC/freqfact.github.io/src/assets/g_logo.jpeg");
							return target[name];
						}
					});

export { link_logo as l };
