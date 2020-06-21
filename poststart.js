const UI_PAGE_URL = new URL('./index.html', import.meta.url).href;

let itemSpawnerWindow = null;

/**
 * Spawns an item.
 * @param {number} item Item index in ItemDatabase.
 * @param {number} [amount=1] Item count.
 * @param {boolean} [hidden=false] Hide item receive message.
 */
function spawnItem(item, amount = 1, hidden = false) {
  sc.model.player.addItem(item, amount, hidden);
};

/**
  * Opens an itemSpawner window.
  * If already opened, focuses existing window.
  */
function openInterface() {
  if (itemSpawnerWindow) {
    itemSpawnerWindow.focus();
    return;
  }

  nw.Window.open(
    UI_PAGE_URL,
    {
      position: 'center',
      width: 476,
      height: 310,
      resizable: false
    },
    (window) => {
      itemSpawnerWindow = window;

      /** Pass itemSpawner to window.
        * Note: Because the window 'loading' event can't be caught
        *       externalSpawnItem is not available on document load. */
      window.on('loaded', () => {
        window.window.externalSpawnItem = spawnItem;
      });

      /* Allow a new itemSpawner window. */
      window.on('closed', () => {
        itemSpawnerWindow = null;
      });
    }
  );
}

/* Open itemSpawner window on 'U' key press. */
document.addEventListener('keydown', (evt) => {
  if (evt.code === "KeyU") openInterface();
});

nw.Window.get().on('close', function() {
  this.hide();
  if (itemSpawnerWindow) itemSpawnerWindow.close(true);
  this.close(true);
});
