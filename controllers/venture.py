from django.contrib.auth import logout, authenticate, login
from django.shortcuts import render


def venture_view(request, id="0"):
    ventures = [
        {
            "title": "Murphee's Irish Coats",
            "image": "coat",
            "progress": "90",
            "step": "elevator",
            "hook": "Bringing the comfort and quality of Traditional Irish\
                    coats to an Online International Exchange",
            "description": "Coming Soon!"
        },
        {
            "title": "Three Lions Magic Show",
            "image": "anti-gravity",
            "progress": "60",
            "step": "survey",
            "hook": "A crew of three globally acclaimed Magicians bend the \
                    rules of reality to make the mundane extraordinary",
            "description": "Comming Soon!"
        },
        {
            "title": "Melies Studio",
            "image": "film",
            "progress": "70",
            "step": "interest",
            "hook": "Georges Melies makes Black and White cinematography \
                     relevant in the 21th century",
            "description": "Coming Soon!"
        },
        {
            "title": "Columbian Exchange",
            "image": "barge",
            "progress": "20",
            "step": "aha",
            "hook": "The quick and enjoyable way to cross the Columbia River \
            Gorge",
            "description": "Coming Soon!"
        },
        {
            "title": "Boston Express",
            "image": "boat",
            "progress": "30",
            "step": "gap",
            "hook": "Want to captain your own ship through Boston Harbor \
                    try Boston express rent a boat!",
            "description": "Coming Soon!"
        },
        {
            "title": "Bricks to Buildings",
            "image": "bricks",
            "progress": "50",
            "step": "survey",
            "hook": "We take ruble from demolitions and make low cost housing",
            "description": "Coming Soon!"
        },
        {
            "title": "Sands of Time",
            "image": "sand",
            "progress": "90",
            "step": "end",
            "hook": "Sand is ever flowing and timeless",
            "description": "Coming Soon!"
        },
        {
            "title": "Turtle Bay",
            "image": "sunglasses",
            "progress": "30",
            "step": "aha",
            "hook": "Sunglasses that can be worn in the sea",
            "description": "Coming Soon!"
        },
        {
            "title": "Hawaiian Reef Tours",
            "image": "turtle",
            "progress": "50",
            "step": "survey",
            "hook": "We have scouted the best reefs on Hawaii \
                    and want to give you the experiance of a lifetime",
            "description": "Coming Soon!"
        }
    ]

    return render(
        request,
        'venture.html',
        dict(
            venture=ventures[int(id)]
        )
    )