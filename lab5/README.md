using redis, the in-memory databse, as the wat to caching.<br/><br/>
for example, if a user refresh a page twice at a time. there is no need for this request to visit the server and even the database twice to perform the exactly same action.<br/><br/>
by caching this act, server could reduce its loading and the user can get faster responses.<br/><br/>
but right now, you have to implement the caching logic yourself. I think it's quite a big and hard task.
