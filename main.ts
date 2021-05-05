import { Plugin } from 'obsidian';

export default class MyPlugin extends Plugin {
	async onload() {
		this.addCommand({
			id: 'obsidian-indent-lines',
			name: 'Indentation Lines',
		});
	}
}
