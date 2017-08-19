Reproduce ericwooley/thewooleyway#13

1. Make sure `hugo` is installed.
2. `git submodule init`
3. `yarn`
4. `yarn run debug`
5. open http://about:inpsect in chrome, inspect the termax process, and turn on "pause on inspections". Then hit continue, you should be hit a break [here in blessed](https://github.com/chjj/blessed/blob/eab243fc7ad27f1d2932db6134f7382825ee3488/lib/program.js#L2543) and [here in terminus-maximus](https://github.com/ericwooley/thewooleyway/blob/6b673454f7346a7fec558e6288a274896345735f/packages/terminus-maximus/lib/bufferDispay.js#L98)

where `self._attr(part, val)` returns undefined, so `self._attr(part, val).slice(2, -1)` returns errors.

This runs well with while piping most output buffers to the box.

Here is what the content of the box should be
```bash
Started building sites ...
Built site for language en:
0 of 1 draft rendered
0 future content
0 expired content
0 regular pages created
6 other pages created
0 non-page files copied
0 paginator pages created
0 categories created
0 tags created
total in 4 ms
Watching for changes in /Users/ericwooley/projects/terminus-maximus-bug/{content,static} # errors on this line
# this is what would be output next
Serving pages from memory
Web Server is available at http://localhost:1313/ (bind address 127.0.0.1)
Press Ctrl+C to stop
```