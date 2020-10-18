#!/usr/local/opt/python3/bin/python3

"""
Crawl youtube video IDS given a playlist id and a youtube api v3 TOKEN
"""
import argparse as ap

def do(API_KEY, PL_ID):
    # TODO: Make Request, parse response and get V_ID's
    BASE_URL=f"https://www.googleapis.com/youtube/v3/playlistItems?part=snippet%2C+id&playlistId={PL_ID}&key={API_KEY}"

if __name__ == "__main__":
    parser = ap.ArgumentParser()
    parser.add_argument("--token", type=str, help="provide youtube api v3 token")
    parser.add_argument("--playlist-id", type=str, help="provide playlist id")
    args = parser.parse_args()
    print(args)
