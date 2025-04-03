const loadPosts = async () => {
    const response = await fetch("https://openapi.programming-hero.com/api/retro-forum/posts");
    const data = await response.json();
    showPosts(data.posts);
}

const showPosts = posts => {
    //console.log(posts);
    const postContainer = document.getElementById("post-container");
    posts.map(post => {
        console.log(post)
        const div = document.createElement("div");
        div.innerHTML = `
        <div class = "flex items-center bg-[#797DFC1A] shadow-sm p-5 rounded-lg">
        <div>
            <img
            src=${post.image} class="w-20 h-20 object-cover rounded-md"
            alt="Movie" />
        </div>
        <div class="card-body">
            <p class="flex gap-5 text-sm">
            <span>#${post.category}</span>
            <span>Author: ${post.author.name}</span>
            </p>
            <h2 class="text-xl font-semibold">${post.title}</h2>
            <p class="text-base font-normal">${post.description}</p>
            <div style="border: 1px dashed rgba(18, 19, 45, 0.25);" class="mt-2"></div>
            <div class="flex justify-around">
            <p class="flex gap-2">
            <span><i class="fa-regular fa-comment-dots fa-lg"></i></span>
            <span>${post.comment_count}</span>
            </p>
            <p class="flex gap-2">
            <span><i class="fa-regular fa-eye fa-lg"></i></span>
            <span>${post.view_count}</span>
            </p>
            <p class="flex gap-2">
            <span><i class="fa-regular fa-clock fa-lg"></i></span>
            <span>${post.posted_time} min</span>
            </p>
            <button class="py-1 px-2 rounded-full bg-[#10B981]"><i class="fa-regular fa-envelope-open fa-lg"></i></button>
            </div>
        </div>
        </div>
        `
        postContainer.appendChild(div)
    })
}
loadPosts()