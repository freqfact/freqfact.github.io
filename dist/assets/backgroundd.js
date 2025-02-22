const astroLogo = new Proxy({"src":"/assets/logo.png","width":2500,"height":2500,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/phist/Library/Mobile Documents/com~apple~CloudDocs/FREQ FACT/MISC/freqfact.github.io/src/assets/logo.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/phist/Library/Mobile Documents/com~apple~CloudDocs/FREQ FACT/MISC/freqfact.github.io/src/assets/logo.png");
							return target[name];
						}
					});

const background = new Proxy({"src":"/assets/backgroundd.png","width":2000,"height":1125,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/phist/Library/Mobile Documents/com~apple~CloudDocs/FREQ FACT/MISC/freqfact.github.io/src/assets/backgroundd.png";
							}
							if (target[name] !== undefined && globalThis.astroAsset) globalThis.astroAsset?.referencedImages.add("/Users/phist/Library/Mobile Documents/com~apple~CloudDocs/FREQ FACT/MISC/freqfact.github.io/src/assets/backgroundd.png");
							return target[name];
						}
					});

export { astroLogo as a, background as b };
